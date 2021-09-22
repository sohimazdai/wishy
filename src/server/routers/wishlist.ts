import express, { Request, Response } from 'express';
import { IIWishlist, WishlistModel } from '../models/wishlist';

const wishlistRouter = express.Router();

wishlistRouter.post('/create', async function (req: Request, res: Response) {
  try {
    const { body, user } = req;
    const wishlistToSave = new WishlistModel({ ...body, userId: (user as any).id });
    const wishlist: IIWishlist = await WishlistModel.create(wishlistToSave);

    res
      .status(200)
      .json(wishlist);
  } catch (e) {
    res.status(500).end(e.message);
  }
});

wishlistRouter.post('/concrete', async function (req: Request, res: Response) {
  try {
    const { body } = req;

    const wishlist: IIWishlist | null = await WishlistModel.findOne({ id: body.id });

    console.log('🤖🤖🤖🤖 find wishlist', wishlist);

    if (wishlist) {
      res
        .status(200)
        .json(wishlist);
    } else {
      throw new Error('Вишлист не найден');
    }
  } catch (e) {
    res.status(404).end(e.message);
  }
});

wishlistRouter.post('/all', async function (req: Request, res: Response) {
  try {
    const { user } = req;

    const wishlists: IIWishlist[] = await WishlistModel.find({ userId: (user as any).id });

    console.log('🤖🤖🤖🤖 find wishlists', wishlists);

    res
      .status(200)
      .json(wishlists);
  } catch (e) {
    res.status(500).end(e.message);
  }
});

// wishlistRouter.post('/delete', async function (req: Request, res: Response) {
//   try {
//     const { req }
//     const { user, token } = await WishlistModel.create(req.body.email, req.body.password);

//     res.cookie(authTokenName, token, { secure: true, expires: getExpiresDate() });

//     res
//       .status(200)
//       .json(user);
//   } catch (e) {
//     res.status(404).end(e.message);
//   }
// });

// wishlistRouter.post('/all', async function (req: Request, res: Response) {
//   try {
//     await AuthService.signUp(req.body.email, req.body.password);

//     res.sendStatus(200);
//   } catch (e) {
//     res
//       .status(409)
//       .end(e.message);
//   }
// });

export default wishlistRouter;
