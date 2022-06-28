import type { NextPage } from 'next';
//import MailList from '../src/common/ui-kit/MailList/MailList';
import { mails } from '../consts/mails';
//import MailListHeader from '../src/common/ui-kit/MailListHeader/MailListHeader';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const columns: GridColDef[] = [
  {
    field: 'sender',
    headerName: 'header',
    width: 150,
  },
  {
    field: 'title',
    headerName: 'title',
    width: 150,
  },
];

const Home: NextPage = () => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid rows={mails} columns={columns} checkboxSelection />
    </Box>

    // <div>
    //   <MailListHeader />
    //   <MailList mailList={mails} />
    // </div>
  );
};

export default Home;
