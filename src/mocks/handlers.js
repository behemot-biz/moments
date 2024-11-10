import {rest } from "msw"

const baseUrl = "https://behemot-biz-django-rest-api-918c07318b07.herokuapp.com"

export const handlers = [
  rest.get(`${baseUrl}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 3,
        username: "petra_slask",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 3,
        profile_image:
          "https://res.cloudinary.com/dg9lrlidj/image/upload/v1/media/../default_profile_lpzfbh",
      })
    );
  }),
  rest.post(`${baseUrl}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];