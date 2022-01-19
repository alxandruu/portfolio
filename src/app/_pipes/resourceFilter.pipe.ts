import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Resource } from '../_interfaces/resource';



@Pipe({
    name: 'resourceFilter'
})
export class ResourceFilterPipe implements PipeTransform {
    transform(resources: Resource[], id: string = ''): Resource[] {
        if (id === '' || id === 'c0') {
            return resources;
        } else {
            const filterResources = resources.filter(r => {
                let category = r.category;
                return category.includes(id);
            });
            return filterResources;
        }
    }
}