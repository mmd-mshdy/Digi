import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Optional: For a menu icon if you'd like
import {Phones} from '@/app/phone.data' ;


const Home = () => {
  return (
    <>
      {/* AppBar */}
      <AppBar position="sticky" sx={{ backgroundColor: 'red' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Digi Kala</Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom align="left">
          Latest Mobile phones:
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {Phones.map((phone) => (
            <Grid item xs={12} sm={6} md={4} key={phone.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={phone.image}
                  alt={phone.name}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {phone.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {phone.description}
                  </Typography>
                </CardContent>
                <Button
                  size="small"
                  color="primary"
                  component="a"
                  href={`/phone/${phone.id}`}
                >
                  Learn More
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;