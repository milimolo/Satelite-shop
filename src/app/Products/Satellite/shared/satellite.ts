import {Product} from '../../shared/product.model';

export interface Satellite extends Product {
  weight: number;
  volume: number;
  maxRange: number;
}
