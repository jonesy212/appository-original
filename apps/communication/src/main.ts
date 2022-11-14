/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

/** ONLY LISTENS TO EVENTS AND MESSAGES FROM INTERNAL SERVICES */
 import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app/app.module';
 
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP, 
    }
  )
  app.listen();
}
bootstrap();


//  async function bootstrap() {
//    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
//      AppModule, 
//      {
//        transport: Transport.TCP
//      }
//    )
//    const appMod = await NestFactory.create(app)
//    const globalPrefix = 'api';
//    appMod.setGlobalPrefix(globalPrefix);
//    const port = process.env.PORT || 3333;
//    await appMod.listen(port);
//    Logger.log(
//      `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
//    );
//  }
 
 bootstrap();