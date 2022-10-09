import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { PremierController } from './premier/premier.controller';
import { TodoModule } from './todo/todo.module';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';

@Module({
  imports: [PremierModule, TodoModule],
  controllers: [AppController, PremierController, TodoController],
  providers: [AppService, TodoService],
})
export class AppModule {}
