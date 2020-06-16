module.exports = (sequelize, DataTypes) => {
  const Credit_cards = sequelize.define('Credit_cards', {
    CVV: {
      type: DataTypes.STRING
    },
    card_no: {
      type: DataTypes.STRING
    },
    card_name: {
      type: DataTypes.STRING
    },
    exp_date: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  })

  return Credit_cards
}