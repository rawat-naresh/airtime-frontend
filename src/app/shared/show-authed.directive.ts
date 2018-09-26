import { Directive, ViewContainerRef, TemplateRef, OnInit, Input } from "@angular/core/";

@Directive({
    selector:'[appShowAuthed]'
})
export class ShowAuthedDirective implements OnInit{
    condition:boolean;
    constructor(private templateRef:TemplateRef<any>,private viewContainer:ViewContainerRef){}

    ngOnInit(){
        if(this.condition) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainer.clear();
        }
    }

    @Input() set appShowAuthed(condition:boolean) {
        this.condition = condition;
    }
}