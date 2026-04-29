import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::class-schedule.class-schedule', ({ strapi }) => ({
  async create(ctx) {
    const date = ctx.request.body?.data?.date;
    if (date) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (new Date(date) < today) {
        return ctx.badRequest('Date cannot be in the past.');
      }
    }
    return super.create(ctx);
  },

  async update(ctx) {
    const date = ctx.request.body?.data?.date;
    if (date) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (new Date(date) < today) {
        return ctx.badRequest('Date cannot be in the past.');
      }
    }
    return super.update(ctx);
  },
}));
