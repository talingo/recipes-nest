import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipeController } from './recipes.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RecipeController],
  providers: [RecipesService],
})
export class RecipeModule {}
