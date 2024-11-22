'use client'
import{FC} from "react";
import { useParams } from 'next/navigation';
import {Phones} from '@/app/phone.data' ;
import { Container, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { Phone } from "@mui/icons-material";
type OwnProps ={

}
const PhonesDetails:FC<OwnProps> = () =>
{
    const params = useParams(); 
    const phoneId = params?.id; 

    const selectedPhone = Phones.find(phone => phone.id === Number(phoneId));


    
    return( <Container sx={{ mt: 4 }}>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={selectedPhone?.image}
          alt={selectedPhone?.name}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {selectedPhone?.name}
          </Typography>
          <Typography variant="body1">{selectedPhone?.description}</Typography>
        </CardContent>
      </Card>
    </Container>)

}