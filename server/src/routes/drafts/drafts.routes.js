const {
  getDraft,
  getDraftsByAuthor,
  getNewDraftId,
  createOrUpdateDraft,
  deleteDraft,
} = require("../../models/drafts/drafts.model");
const express = require("express");
const draftsRouter = express.Router();

draftsRouter.get("/draft/:draftId", async (req, res) => {
  const draft = await getDraft(req.params.draftId);
  res.json(draft);
});

draftsRouter.delete("/draft/:draftId", async (req, res) => {
  const draftId = req.params.draftId;
  const response = await deleteDraft(draftId);
  res.send(response);
});

draftsRouter.post("/draft", async (req, res) => {
  const draftObj = req.body;
  const response = await createOrUpdateDraft(draftObj);
  res.json(response);
});

draftsRouter.get("/drafts/:authorId", async (req, res) => {
  const drafts = await getDraftsByAuthor(req.params.authorId);
  res.json(drafts);
});

draftsRouter.get("/draftsCount", async (req, res) => {
  const id = await getNewDraftId();
  res.json({ id });
});

module.exports = { draftsRouter };
