import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Label,
    FormGroup,
    Button,
    Alert,
    InputGroup,
    InputGroupAddon,
} from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Mail, Lock } from 'react-feather';

import { loginUser } from '../../redux/actions';
import { isUserAuthenticated } from '../../helpers/authUtils';
import Loader from '../../components/Loader';
import logo from '../../assets/images/logo.png';

class Login extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.state = {
            username: 'test',
            password: 'test',
        };
    }

    componentDidMount() {
        this._isMounted = true;

        document.body.classList.add('authentication-bg');
    }

    componentWillUnmount() {
        this._isMounted = false;
        document.body.classList.remove('authentication-bg');
    }

    /**
     * Handles the submit
     */
    handleValidSubmit = (event, values) => {
        this.props.loginUser(values.username, values.password, this.props.history);
    };

    /**
     * Redirect to root
     */
    renderRedirectToRoot = () => {
        const isAuthTokenValid = isUserAuthenticated();
        if (isAuthTokenValid) {
            return <Redirect to="/" />;
        }
    };

    render() {
        const isAuthTokenValid = isUserAuthenticated();
        return (
            <React.Fragment>
                {this.renderRedirectToRoot()}

                {(this._isMounted || !isAuthTokenValid) && (
                    <div className="account-pages my-5">
                        <Container>
                            <Row className="justify-content-center">
                                <Col xl={10} style={{ maxWidth: 'fit-content', paddingLeft: '0px', paddingRight: '0px' }}>
                                    <Card className=""  style={{ padding: '0px', width: 'fit-content' }}>
                                        <CardBody className="p-0">
                                            <Row style={{maxWidth: "600px"}}>
                                                <Col md={6} className="p-5 position-relative" style={{flex: "0 0 100%", maxWidth: "100%"}}>
                                                    {/* preloader */}
                                                    {this.props.loading && <Loader />}

                                                    <div className="mx-auto mb-5">
                                                        <a href="/">
                                                            <img src={logo} alt="" height="34" />
                                                            <h3 className="d-inline align-middle ml-1 text-logo">
                                                                AtendeZap
                                                            </h3>
                                                        </a>
                                                    </div>

                                                    <h6 className="h5 mb-0 mt-4">Olá 👋, seja bem vindo!</h6>
                                                    <p className="text-muted mt-1 mb-4">
                                                        Insira seu endereço de email e sua senha para ter acesso à
                                                        plataforma.
                                                    </p>

                                                    {this.props.error && (
                                                        <Alert color="danger" isOpen={this.props.error ? true : false}>
                                                            <div>{this.props.error}</div>
                                                        </Alert>
                                                    )}

                                                    <AvForm
                                                        onValidSubmit={this.handleValidSubmit}
                                                        className="authentication-form">
                                                        <AvGroup className="">
                                                            <Label for="username">Email</Label>
                                                            <InputGroup>
                                                                <InputGroupAddon addonType="prepend">
                                                                    <span className="input-group-text">
                                                                        <Mail className="icon-dual" />
                                                                    </span>
                                                                </InputGroupAddon>
                                                                <AvInput
                                                                    type="text"
                                                                    name="username"
                                                                    id="username"
                                                                    placeholder="hello@coderthemes.com"
                                                                    value={this.state.username}
                                                                    required
                                                                />
                                                            </InputGroup>

                                                            <AvFeedback>Insira um email válido</AvFeedback>
                                                        </AvGroup>

                                                        <AvGroup className="mb-3">
                                                            <Label for="password">Senha</Label>
                                                            <Link
                                                                to="/account/forget-password"
                                                                className="float-right text-muted text-unline-dashed ml-1">
                                                                Esqueceu sua senha?
                                                            </Link>
                                                            <InputGroup>
                                                                <InputGroupAddon addonType="prepend">
                                                                    <span className="input-group-text">
                                                                        <Lock className="icon-dual" />
                                                                    </span>
                                                                </InputGroupAddon>
                                                                <AvInput
                                                                    type="password"
                                                                    name="password"
                                                                    id="password"
                                                                    placeholder="Enter your password"
                                                                    value={this.state.password}
                                                                    required
                                                                />
                                                            </InputGroup>
                                                            <AvFeedback>Insira uma senha válida</AvFeedback>
                                                        </AvGroup>

                                                        <FormGroup className="form-group mb-0 text-center">
                                                            <Button color="primary" className="btn-block">
                                                                Entrar
                                                            </Button>
                                                        </FormGroup>

                                                        <Row className="mt-3">
                                                            <Col className="col-12 text-center">
                                                                <p className="text-muted">
                                                                    Ainda não tem uma conta?{' '}
                                                                    <Link
                                                                        to="/account/register"
                                                                        className="text-primary font-weight-bold ml-1">
                                                                        Cadastre-se
                                                                    </Link>
                                                                </p>
                                                            </Col>
                                                        </Row>
                                                    </AvForm>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                )}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    const { user, loading, error } = state.Auth;
    return { user, loading, error };
};

export default connect(mapStateToProps, { loginUser })(Login);
