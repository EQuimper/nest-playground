import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [TodosModule, MongooseModule.forRoot('mongodb://localhost/nest-todos')],
  controllers: [AppController],
  components: [],
})
export class AppModule {}
