import {
  Avatar,
  Box,
  Card,
  Icon,
  IconButton,
  MenuItem,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material';
import { Paragraph } from 'app/components/Typography';
import { bg } from 'date-fns/locale';

const CardHeader = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));

const ProductTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: 'pre',
  '& small': {
    width: 50,
    height: 15,
    borderRadius: 500,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
  },
  '& td': { borderBottom: 'none' },
  '& td:first-of-type': { paddingLeft: '16px !important' },
}));

const Small = styled('small')(({ bgcolor }) => ({
  width: 50,
  height: 15,
  color: '#fff',
  padding: '2px 8px',
  borderRadius: '4px',
  overflow: 'hidden',
  background: bgcolor,
  boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}));

const TopSellingTable = () => {
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;

  return (
    <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <CardHeader>
        <Title>recent videos</Title>
        <Select size="small" defaultValue="this_month">
          <MenuItem value="this_month">This Month</MenuItem>
          <MenuItem value="last_month">Last Month</MenuItem>
        </Select>
      </CardHeader>

      <Box overflow="auto">
        <ProductTable>
          <TableHead>
            <TableRow>
              <TableCell sx={{ px: 3 }} colSpan={4}>
                Name
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Plays
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Sentiment
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={1}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {productList.map((product, index) => (
              <TableRow key={index} hover>
                <TableCell colSpan={4} align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
                  <Box display="flex" alignItems="center">
                    <Avatar src={product.imgUrl} />
                    <Paragraph sx={{ m: 0, ml: 4 }}>{product.name}</Paragraph>
                  </Box>
                </TableCell>

                <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
                  {product.plays}
                </TableCell>

                <TableCell sx={{ px: 0 }} align="left" colSpan={2}>
                  {product.sentiment.includes("happy") && <Small bgcolor="#228B22">Happy</Small>}
                  {product.sentiment.includes("surprised") && <Small bgcolor={bgSecondary}>Surprised</Small>}
                  {product.sentiment.includes("afraid") && <Small bgcolor={bgError}>Worried</Small>}
                </TableCell>

                <TableCell sx={{ px: 0 }} colSpan={1}>
                  <IconButton>
                    <Icon color="primary">expand</Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ProductTable>
      </Box>
    </Card>
  );
};

const productList = [
  {
    imgUrl: '/assets/images/tiktok.png',
    name: 'Video 1',
    plays: '1.3M',
    sentiment: ["happy", "surprised"],
  },
  {
    imgUrl: '/assets/images/tiktok.png',
    name: 'Video 2',
    plays: "4.5M",
    sentiment: ["happy"],
  },
  {
    imgUrl: '/assets/images/tiktok.png',
    name: 'Video 3',
    plays: "3.1M",
    sentiment: ["afraid", "surprised"],
  },
  {
    imgUrl: '/assets/images/tiktok.png',
    name: 'Video 4',
    plays: "2.4M",
    sentiment: ["happy"],
  },
  {
    imgUrl: '/assets/images/tiktok.png',
    name: 'Video 5',
    plays: "3.3M",
    sentiment: ["happy", "surprised"],
  },
];

export default TopSellingTable;
