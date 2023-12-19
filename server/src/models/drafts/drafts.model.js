const draftsDb = require("./drafts.mongo");

async function getDraft(draftId) {
  const draft = await draftsDb.findOne({ id: draftId });
  return draft;
}

async function getDraftsByAuthor(authorId) {
  const drafts = await draftsDb.find({ authorId: authorId });
  return drafts;
}

async function getNewDraftId() {
  const drafts = await draftsDb.find();
  let maxId = 0;
  drafts.forEach(({ id }) => (maxId = Math.max(maxId, id)));
  return maxId + 1;
}

async function createOrUpdateDraft(draftObj) {
  const draft = await draftsDb.findOne({ id: draftObj.id });
  let response = "";
  if (draft) {
    response = await draftsDb.updateOne({ id: draftObj.id }, draftObj);
  } else {
    response = await draftsDb.create(draftObj);
  }
  return response;
}

module.exports = {
  getDraft,
  getDraftsByAuthor,
  createOrUpdateDraft,
  getNewDraftId,
};
