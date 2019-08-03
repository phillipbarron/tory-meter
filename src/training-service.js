import brain from './brainjs';

const net = new brain.recurrent.LSTM();

net.train([
  { input: 'Corbyn\'s toxic cadre', output: 'tory' },
  { input: 'blood Tories', output: 'normal' },
]);

net.run('blood Tories');
