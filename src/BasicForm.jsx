import { useState } from "react";
import { Form, Button } from "react-bootstrap";
function BasicForm() {
  const [basic, setBasic] = useState(8500);
  const [pool, setPool] = useState(0);
  const [area, setArea] = useState(1200);
  const [park, setPark] = useState(300000);
  return (
    <>
      <center className="mb-5">
        <h1>Reciept Generator</h1>
      </center>
      <Form>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Kiran kumar u"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput2" class="form-label">
            Mobile Number
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="+91- 1234567890"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Super Built Up Area
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="1200"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Price Per Sqft
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="8500"
            value={basic}
            onChange={(e) => setBasic(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Swimming Pool Charges
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="500"
            value={pool}
            onChange={(e) => setPool(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Maintenance Charges
          </label>
          <input
            class="form-control"
            id="disabledInput"
            type="text"
            placeholder="Disabled input here..."
            disabled
            value={area * 2.5 * 12}
          ></input>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Corpus Fund
          </label>
          <input
            class="form-control"
            id="disabledInput"
            type="text"
            placeholder="Disabled input here..."
            disabled
            value={area * 30}
          ></input>
        </div>
        <div>
          <label for="exampleFormControlInput1" class="form-label">
            Car Parking
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="300000"
            value={park}
            onChange={(e) => setPark(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Bwssb & Kptcl charges
          </label>
          <input
            class="form-control"
            id="disabledInput"
            type="text"
            placeholder="Disabled input here..."
            disabled
            value={area * 200}
          ></input>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Total Amount
          </label>
          <input
            class="form-control"
            id="disabledInput"
            type="number"
            placeholder="Disabled input here..."
            disabled
            value={
              area * basic /* Basic charge */ +
              pool * area /* Pool charge */ +
              area * 2.5 * 12 /* Maintenance charge */ +
              area * 30 /* Corpus Fund */ +
              area * 200 /* Bwssb & Kptcl charges */ +
              Number(park) /* Car Parking */
            }
          ></input>
        </div>
      </Form>
      <center className="mt-3">
        <Button onClick={() => window.print()}> Print</Button>
      </center>
    </>
  );
}

export default BasicForm;
