// Item model
const Item = sequelize.define(
  "item",
  {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    code: {
      type: Sequelize.STRING(12),
      allowNull: false,
    },
    name: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    price: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    releaseDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    closeDate: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

// Promotion model
const Promotion = sequelize.define(
  "promotion",
  {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    startDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    endDate: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

// Promotion_item model
const PromotionItem = sequelize.define(
  "promotion_item",
  {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    promotionId: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
    itemId: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
    discount: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    count: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

// Relations
Item.hasMany(PromotionItem, { foreignKey: "itemId" });
PromotionItem.belongsTo(Item, { foreignKey: "itemId" });

Promotion.hasMany(PromotionItem, { foreignKey: "promotionId" });
PromotionItem.belongsTo(Promotion, { foreignKey: "promotionId" });
