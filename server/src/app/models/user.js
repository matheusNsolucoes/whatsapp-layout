const mongoose = require("../../database");

const UsersSchema = new mongoose.Schema({
  userId: {
    type: String,
    require: true,
  },
  email:{
    type: String,
    require: true
  },
  password:{
    type: String,
    require: true
  },
  contactList: {
    type: Array,
    default: []
  },
  campaigns: [
    {
      name: String,
      flow: []
    }
  ],
  flowList: [
    {
      name: String,
      execution: Number,
      ctr: Number,
      createdAt: {
        type: Date,
        default: Date.now,
      },
      flow: [
        {
          edges: [mongoose.Schema.Types.Mixed],
          nodes: [mongoose.Schema.Types.Mixed],
          viewport: mongoose.Schema.Types.Mixed,
        }
      ]
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;