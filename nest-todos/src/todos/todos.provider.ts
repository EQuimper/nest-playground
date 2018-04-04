import { Connection } from 'mongoose';

import { TodoSchema } from './schemas/todo.schema';

export const todosProviders = [
  {
    provide: 'TodoModelToken',
    useFactory: (connection: Connection) => connection.model('Todo', TodoSchema),
    inject: ['DbConnectionToken'],
  },
];
