import fs from 'fs-extra';

const filterFn = (src: string, dest: string): boolean => {
  console.log(`cpdir: '${src}' -> '${dest}'`);
  // add filter logic here if you want to skip files/directories
  // return true the files you want to keep
  return true;
};

const cpdir = async () => {
  try {
    await fs.copy('./testfolder1', './testfolder2', {
      overwrite: false,
      filter: filterFn,
    });
    console.log('success!');
  } catch (err) {
    console.error(err);
  }
};

cpdir();
