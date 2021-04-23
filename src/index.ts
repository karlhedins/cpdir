import fs from 'fs-extra';

const cpdir = async () => {
  try {
    await fs.copy('./testfolder1', './testfolder2');
    console.log('success!');
  } catch (err) {
    console.error(err);
  }
};

cpdir();
