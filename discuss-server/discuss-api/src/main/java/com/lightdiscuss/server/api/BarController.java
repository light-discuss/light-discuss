package com.lightdiscuss.server.api;

import com.lightdiscuss.common.model.Bar;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BarController {

    @GetMapping("/")
    String bar() {
        return new Bar().toString();
    }

}
