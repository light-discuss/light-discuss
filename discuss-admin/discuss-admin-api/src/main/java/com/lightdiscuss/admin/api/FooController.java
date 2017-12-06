package com.lightdiscuss.admin.api;

import com.lightdiscuss.common.model.Foo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FooController {

    @GetMapping("/")
    String foo() {
        return new Foo().toString();
    }

}
