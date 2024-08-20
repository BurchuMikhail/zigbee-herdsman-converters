import {light} from '../lib/modernExtend';
import {Definition} from '../lib/types';

const definitions: Definition[] = [
    {
        zigbeeModel: ['FB56-ZBW14LF1.4', 'RH0039', 'AG0002'],
        model: '322054',
        vendor: 'Lanesto',
        description: 'Dimmable led driver',
        extend: [light()],
    },
];

export default definitions;
module.exports = definitions;
