'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(
      `UPDATE "Orders"
  SET "interval" = "Subscriptions"."interval"
  FROM "Subscriptions"
  WHERE "Subscriptions"."id" = "Orders"."SubscriptionId"
  AND "SubscriptionId" IS NOT NULL
  AND "Orders"."interval" IS NULL`,
    );
  },

  down: async (queryInterface, Sequelize) => {},
};
