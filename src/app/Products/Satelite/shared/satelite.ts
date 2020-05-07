import {Product} from '../../shared/product.model';

export interface Satelite extends Product {
  weight: number;
  volume: number;
  maxRange: number;
}
