import "./addCamera.css"
export default function AddCamera() {
  return (
    <div className='editCamera'>
      <h1 className="title">Add Camera</h1>
      <div className="editCameraContainer">
        
    <div class="form-style-6">
<form>
<input type="text" name="field1" placeholder="Location" />
<input type="text" name="field1" placeholder="Camera Type" />
<input type="text" name="field1" placeholder="IP Address" />
<input type="email" name="field2" placeholder="Nickname" />
<textarea name="field3" placeholder="Comments"></textarea>
<input type="submit" value="Add" />
</form>
</div>
      </div>
    </div>
  );
}

