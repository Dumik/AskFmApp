const { Router } = require('express');
const User = require('../models/User');
const router = Router();
const auth = require('../middleware/auth.middleware');

router.get('/:id', auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.post('/:id', async (req, res) => {
  try {
    if (req.body) {
      res.send({
        status: req,
        message: req,
      });
    } else {
      const user = await User.findById(req.params.id);

      if (!user) {
        res.send({
          status: 'failed',
          message: user.username,
        });
        return;
      }

      // const updateUser = User.updateOne(
      //   { _id: req.params.id },
      //   {
      //     $set: {
      //       avatar:
      //         'https://medcenter.lviv.ua/templates/images/doctors/11b7ced68c0ab7880e2464e76804d7ca_1635621155.png',
      //     },
      //   }
      // ).catch(error => {
      //   res.status(400).json({ message: 'error' });
      // });

      res.send({
        status: 'success',
        message: 'User is update',
        requ: user,
      });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
