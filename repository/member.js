const { Users } = require("../models");

class MembersRepository {
  findAllMembers = async () => {
    const findAllMembers = await Users.findAll({});
    return findAllMembers;
  };
  createMembers = async (email, profileName) => {
    try {
      const createMembers = await Users.create({
        email,
        profileName,
      });
      return createMembers;
    } catch (err) {
      throw new Error();
    }
  };

  updateMember = async (email, profileName, nickname) => {
    try {
      const updateMember = await Users.update(
        { nickname },
        { where: { email } }
      );
      return updateMember;
    } catch (err) {
      throw new Error();
    }
  };

  deleteMember = async (email) => {
    try {
      const deleteMember = await Users.destroy({ where: { email } });
      return deleteMember;
    } catch (err) {
      throw new Error();
    }
  };
}

module.exports = MembersRepository;
