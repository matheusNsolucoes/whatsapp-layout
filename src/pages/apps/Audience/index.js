import React, { useEffect, useState, useRef } from 'react';
import {
    Container,
    ProfilePicture,
    ButtonsRow,
    TopButtons,
    FilterButton,
    SearchWrapper,
    SearchInput,
    Tag,
} from './styles';
import ReactPaginate from 'react-paginate';
import CheckboxGroup from 'react-checkbox-group';
import { convertToFullDate, convertToPhone } from '../../../utils/conversions';
import { useModalContext } from '../../../modal.context';
import * as XLSX from 'xlsx';
import defaultPic from '../../../assets/images/defaultPic.jpg';
import { getAllTags, getContacts } from '../../../services/api';
import {
    AiOutlineDownload,
    AiOutlineUpload,
    IoMdContact,
    BiSearchAlt,
    MdArrowForwardIos,
    BsFilterRight,
} from '../../../styles/Icons';
import NewUserModal from '../../../components/NewUserModal';
import { addNewContact, getContactPic } from '../../../services/api';
import OpenContactModal from '../../../components/OpenContactModal';
import PageTitle from '../../../components/PageTitle';
import { Col, Row } from 'reactstrap';

function UserPanel({ match }) {
    const [contacts, setContacts] = useState([]);
    const [numbers, setNumbers] = useState([]);
    const [searchBox, setSearchBox] = useState('');
    const [itemOffset, setItemOffset] = useState(0);
    const [modalType, setModalType] = useState('');
    const [numberForModal, setNumberForModal] = useState('');
    const [contactNameModal, setContactNameModal] = useState('');
    const [contactPfpModal, setContactPfpModal] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [createdAt, setCreatedAt] = useState();
    const [userTags, setUserTags] = useState([]);
    const fileinput = useRef(null);

    const endOffset = itemOffset + 8;
    const currentItems = contacts.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(contacts.length / 8);

    const userIns = match.params.userIns;

    const handlePageClick = (event) => {
        // paginação da data-table
        const newOffset = (event.selected * 8) % contacts.length;
        setItemOffset(newOffset);
    };

    const {
        modalState: { visible },
        openModal,
    } = useModalContext();
    
    useEffect(() => {
        // pega os contatos do usuário
        const loadContacts = async () => {
            let data = await getContacts({
                userToken: localStorage.getItem('userToken'),
            });
            setContacts(data.data);
        };
        loadContacts();
    }, []);

    useEffect(() => {
        const getAlltagsforUser = async () => {
            const tags = await getAllTags(localStorage.getItem('userToken'));
            setUserTags(tags[0].tags);
        };
        getAlltagsforUser();
    }, []);

    const handleFileChange = async (event) => {
        // responsavel pela função de importação de contatos através de um arquivo excel.
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firtSheet = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firtSheet];
            const array = XLSX.utils.sheet_to_json(worksheet);
            try {
                array.map(async (files) => {
                    await addNewContact({
                        phone_number: files.telefone,
                        contact_name: files.sobrenome,
                        user_token: localStorage.getItem('userToken'),
                        user_id: userIns,
                    });
                });

                window.location.reload(false);
            } catch (error) {
                window.alert('[!!] Ocorreu um erro ao importar o contato');
            }
        };

        reader.readAsArrayBuffer(file);
    };

    const handleReport = async () => {
        // Cria uma planilha usando a biblioteca XLSX
        const spreadsheet = XLSX.utils.json_to_sheet(contacts);

        // Cria um livro de trabalho e adiciona a planilha a ele
        const contact = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(contact, spreadsheet, 'Relatorio');

        // Converte o livro de trabalho em um ArrayBuffer (array de bytes)
        const sheet = XLSX.write(contact, { type: 'array', bookType: 'xlsx' });

        // Cria um objeto Blob a partir do ArrayBuffer
        const blob = new Blob([sheet], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'relatorio.xlsx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Container>
            {visible ? (
                <>
                    {modalType === 'createNewContact' && <NewUserModal userIns={userIns} />}
                    {modalType === 'ContatcInfo' && (
                        <OpenContactModal
                            number={numberForModal}
                            name={contactNameModal}
                            contact={contacts}
                            userIns={userIns}
                            createdAt={createdAt}
                        />
                    )}
                </>
            ) : (
                <></>
            )}
            <input type="file" accept=".xlsx" ref={fileinput} style={{ display: 'none' }} onChange={handleFileChange} />
            {/* <!-- Site wrapper --> */}
            <div className="wrapper">
                {/* <!-- Content Wrapper. Contains page content --> */}
                <div className="content-wrapper">
                    {/* <!-- Content Header (Page header) --> */}
                    <section className="content-header">
                        <div className="container-fluid">
                            <ButtonsRow>
                                <Row className="page-title">
                                    <Col className="col-12">
                                        <PageTitle
                                            breadCrumbItems={[{ label: 'Audiência', path: '/audience', active: true }]}
                                            title={'Audiência'}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <TopButtons onClick={() => fileinput.current.click()}>
                                        <AiOutlineUpload size={20} /> Importar Contatos
                                    </TopButtons>
                                    <TopButtons onClick={handleReport}>
                                        <AiOutlineDownload size={20} />
                                        Relatório
                                    </TopButtons>
                                    <TopButtons
                                        onClick={() => {
                                            openModal();
                                            setModalType('createNewContact');
                                        }}>
                                        <IoMdContact size={20} />
                                        Novo contato
                                    </TopButtons>
                                </Row>
                            </ButtonsRow>
                        </div>
                    </section>
                    <div className="hr-divider"></div>
                    <section className="d-flex">
                        <Col className="col-3 scroll-div">
                            <div>
                                <table className="table table-borderless" cellpadding="2px">
                                    <thead>
                                        <tr>
                                            <th scope="col">Etiquetas</th>
                                            <th className="font-weight-normal text-right cor-cinza">Contatos</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(userTags || []).map((tag) => {
                                            return (
                                                <tr>
                                                    <Tag className="cor-cinza padding-none">{tag.name}</Tag>
                                                    <Tag className="text-right cor-cinza ">0</Tag>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                                <div className="text-center">
                                    <a className="ver-link" href="#">
                                        Ver Tudo
                                    </a>
                                </div>
                            </div>
                            <div>
                                <table className="table table-borderless" cellpadding="2px">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sequências</th>
                                            <th className="font-weight-normal text-right cor-cinza">Contatos</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="cor-cinza">Retorno 3 Horas depois</td>
                                            <td className="text-right cor-cinza">0</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="text-center">
                                    <a className="ver-link" href="#">
                                        Ver Tudo
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <table className="table table-borderless" cellpadding="2px">
                                        <thead>
                                            <tr>
                                                <th scope="col">Camapanhas</th>
                                                <th className="font-weight-normal text-right cor-cinza">Contatos</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="cor-cinza">Imóvel Rua XYZ</td>
                                                <td className="text-right cor-cinza">0</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Col>
                        <div className="col-9">
                            <div className="d-flex justify-content-end align-items-center">
                                <FilterButton>
                                    <BsFilterRight size={20} />
                                    Filtrar
                                </FilterButton>
                                <SearchWrapper>
                                    <div className="input-group-prepend">
                                        <span id="addon-wrapping">
                                            <BiSearchAlt size={20} />
                                        </span>
                                    </div>
                                    <SearchInput
                                        type="text"
                                        placeholder="Buscar por usuários.."
                                        aria-label="Username"
                                        aria-describedby="addon-wrapping"
                                        onChange={(e) => setSearchBox(e.target.value)}
                                    />
                                </SearchWrapper>
                            </div>
                            <div className="my-4" style={{ width: '100%' }}>
                                <table id="example2" className="table" style={{ width: '100%' }}>
                                    <thead>
                                        <tr>
                                            <th className="text-center">
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        className="custom-control-input custom-control-input-success"
                                                        type="checkbox"
                                                        id="customCheckbox1"
                                                    />
                                                    <label
                                                        for="customCheckbox1"
                                                        className="custom-control-label"></label>
                                                </div>
                                            </th>
                                            <th className="text-center" scope="col">
                                                #
                                            </th>
                                            <th scope="col">Nome</th>
                                            <th scope="col">N° WhatsApp</th>
                                            <th scope="col">Inscrição</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <CheckboxGroup name="numbers" value={numbers} onChange={setNumbers}>
                                            {(Checkbox) => (
                                                <>
                                                    {searchBox !== ''
                                                        ? contacts
                                                              .filter((contact) =>
                                                                  contact.contact
                                                                      ?.toLowerCase()
                                                                      .includes(searchBox?.toLowerCase())
                                                              )
                                                              .map((contact, index) => {
                                                                  return (
                                                                      <tr style={{ cursor: 'pointer' }} key={index}>
                                                                          <td className="text-center">
                                                                              <Checkbox value={contact.number} />
                                                                          </td>
                                                                          <div
                                                                              style={{ display: 'contents' }}
                                                                              onClick={() => {
                                                                                  openModal();
                                                                                  setModalType('ContatcInfo');
                                                                                  setNumberForModal(contact.number);
                                                                                  setContactNameModal(contact.contact);
                                                                                  setContactPfpModal(contact.pfp);
                                                                                  setCreatedAt(contact.date);
                                                                              }}>
                                                                              <td className="text-center">
                                                                                  <span>
                                                                                      <ProfilePicture
                                                                                          src={
                                                                                              contact.pfp !== null
                                                                                                  ? contact.pfp
                                                                                                  : defaultPic
                                                                                          }
                                                                                          onError={({
                                                                                              currentTarget,
                                                                                          }) => {
                                                                                              currentTarget.onerror =
                                                                                                  null;
                                                                                              currentTarget.src =
                                                                                                  defaultPic;
                                                                                          }}></ProfilePicture>
                                                                                  </span>
                                                                              </td>
                                                                              <td className="id-nome">
                                                                                  {contact.contact}
                                                                              </td>
                                                                              <td>{convertToPhone(contact.number)}</td>
                                                                              <td className="inscrito">
                                                                                  {convertToFullDate(contact.date)}
                                                                              </td>
                                                                          </div>
                                                                      </tr>
                                                                  );
                                                              })
                                                        : currentItems.map((contact, index) => {
                                                              return (
                                                                  <tr key={index} style={{ cursor: 'pointer' }}>
                                                                      <td className="text-center">
                                                                          <Checkbox value={contact.number} />
                                                                      </td>
                                                                      <div
                                                                          style={{ display: 'contents' }}
                                                                          onClick={() => {
                                                                              openModal();
                                                                              setModalType('ContatcInfo');
                                                                              setNumberForModal(contact.number);
                                                                              setContactNameModal(contact.contact);
                                                                              setCreatedAt(contact.date);
                                                                          }}>
                                                                          <td className="text-center">
                                                                              <span>
                                                                                  <ProfilePicture
                                                                                      src={
                                                                                          contact.pfp !== null
                                                                                              ? contact.pfp
                                                                                              : defaultPic
                                                                                      }
                                                                                      onError={({ currentTarget }) => {
                                                                                          currentTarget.onerror = null;
                                                                                          currentTarget.src =
                                                                                              defaultPic;
                                                                                      }}></ProfilePicture>
                                                                              </span>
                                                                          </td>
                                                                          <td className="id-nome">{contact.contact}</td>
                                                                          <td>{convertToPhone(contact.number)}</td>
                                                                          <td className="inscrito">
                                                                              {convertToFullDate(contact.date)}
                                                                          </td>
                                                                      </div>
                                                                  </tr>
                                                              );
                                                          })}
                                                </>
                                            )}
                                        </CheckboxGroup>
                                    </tbody>
                                </table>
                            </div>
                            {/* <!-- <div className="d-flex justify-content-center mb-3"> */}
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel={<MdArrowForwardIos />}
                                className="react-paginate"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={8}
                                pageCount={pageCount}
                                activeClassName="active-page"
                                previousLabel={<MdArrowForwardIos className="back" />}
                                renderOnZeroPageCount={null}
                            />
                        </div>
                    </section>
                </div>
            </div>
            {/* <!-- ./wrapper --> */}
        </Container>
    );
}

export default UserPanel;
