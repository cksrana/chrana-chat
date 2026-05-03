import express from 'express';

const router = express.Router();

router.get('/signup', (req, res) => {
  res.send('SIGNUP Endpoint');
}); 

router.get('/login', (req, res) => {
  res.send('LOGIN Endpoint');
}); 

router.get('/logout', (req, res) => {
  res.send('LOGOUT Endpoint');
});  

export default router;  