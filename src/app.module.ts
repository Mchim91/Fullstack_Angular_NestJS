import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserResolver } from './user/user.resolver';
import { CardModule } from './card/card.module';
import { SwimlaneModule } from './swimlane/swimlane.module';
import { BoardModule } from './board/board.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, BoardModule, SwimlaneModule, CardModule],
  controllers: [AppController],
  providers: [AppService, UserResolver],
})
export class AppModule {}
