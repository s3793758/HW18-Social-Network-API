const mongoose = require('mongoose');

const ReactionSchema = new mongoose.Schema({
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    default: () => new mongoose.Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    default: Date.now,
  },
});

ReactionSchema.methods.toJSON = function () {
  const reaction = this;
  const newReaction = reaction.toObject();
  newReaction.createdAt = new Date(newReaction.createdAt).toLocaleDateString(
    'en-US'
  );
  return newReaction;
};

const Reaction = mongoose.model('Reaction', ReactionSchema);

module.exports = Reaction;
