import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepositoy } from './messages.repository';

@Module({
  controllers: [MessagesController] ,
  providers : [MessagesRepositoy , MessagesService]        //things that can be userd as depandencies for other classes
})
export class MessagesModule {}
