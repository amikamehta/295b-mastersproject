import "./updateCamera.css"
export default function UpdateCamera() {
  return (
    <div className='editCamera'>
      <h1 className="title">Update Camera</h1>
      <div className="editCameraContainer">
        
    <div class="form-style-6">
<form>
<input type="text" name="field1" placeholder="Camera ID" />
<input type="text" name="field1" placeholder="New Location" />
<input type="text" name="field1" placeholder="New Camera Type" />
<input type="text" name="field1" placeholder="New IP Address" />
<input type="email" name="field2" placeholder="New Nickname" />
<textarea name="field3" placeholder="Comments"></textarea>
<input type="submit" value="Submit" />
</form>
</div>
      </div>
    </div>
  );
}

