import dbConnect from "@/lib/dbConnect";
import { auth } from "@/lib/auth";
import OrderModel from "@/lib/models/OrderModel";

export const GET = auth(async (...request: any) => {
    const [req, { params }] = request
    if (!req.auth) {
        return Response.json(
            { message: 'unauthorized' },
            {
                status: 401,
            }
        )
    }

    const { user } = req.auth

    await dbConnect()

    const orders = await OrderModel.findById(params.id);

    return Response.json(orders)
}) as any   // eslint-disable-line