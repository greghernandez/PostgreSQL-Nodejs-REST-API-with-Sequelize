import Account from '../models/account'

export async function createAcccount(req, res) {
    const {
        email,
        password,
        accounttype,
        userid
    } = req.body
    try {
        let newAccount = await Account.create({
            email,
            password,
            accounttype,
            userid
        })
        if (newAccount) {
            res.JSON({
                message: 'Cuenta creada correctamente',
                data: newAccount
            })
        }

    } catch (err) {

    }
}