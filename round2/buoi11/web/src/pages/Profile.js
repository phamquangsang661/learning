import { useAuth } from '../lib/hooks/use-auth'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
export default function Profile() {
    const { isAuth, me } = useAuth(true)
    if (!isAuth)
        return null
    return <div>
        <p>Name: {me.username}</p>
        <p>Email: {me.email}</p>
        <div className="p-5 flex flex-col gap-3">
            <h3>Wallets</h3>
            <TableContainer component={Paper} className="!w-fit">
                <Table sx={{ minWidth: 650, maxWidth: 700 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">Public key</TableCell>
                            <TableCell align="right">Wallets name</TableCell>
                            <TableCell align="right">Created at</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {me.wallets.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.publicKey}</TableCell>
                                <TableCell align="right">{row.walletName}</TableCell>
                                <TableCell align="right">{row.createdAt}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    </div>


}