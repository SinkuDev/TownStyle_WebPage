import { Plus, Pencil, Trash2 } from "lucide-react";
import { useState, useRef } from "react";

export default function RoomManager() {
  const [roomName, setRoomName] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [floor, setFloor] = useState("");
  const [blueprintUrl, setBlueprintUrl] = useState("");
  const [deskCapacity, setDeskCapacity] = useState(1);
  const [rowCount, setRowCount] = useState(1);
  const [colCount, setColCount] = useState(1);
  const [department, setDepartment] = useState("");
  const [description, setDescription] = useState("");

  const [rooms, setRooms] = useState([]);
  const [isAddingRoom, setIsAddingRoom] = useState(false);

  const layoutRef = useRef(null);

  const totalDesks = rowCount * colCount;

  const handleAddRoom = (e) => {
    e.preventDefault();

    const newRoom = {
      id: Date.now(),
      name: roomName,
      number: roomNumber,
      floor,
      blueprintUrl,
      rowCount,
      colCount,
      totalDesks,
      deskCapacity,
      totalCapacity: deskCapacity * totalDesks,
      department,
      description,
    };

    setRooms((prev) => [...prev, newRoom]);

    // Reset form
    setRoomName("");
    setRoomNumber("");
    setFloor("");
    setBlueprintUrl("");
    setDeskCapacity(1);
    setRowCount(1);
    setColCount(1);
    setDepartment("");
    setDescription("");

    setIsAddingRoom(false); // hide the form
    layoutRef.current?.scrollIntoView({ behavior: "smooth" }); // scroll to layout section
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Room Layout</h1>
        <button
          onClick={() => setIsAddingRoom(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
        >
          <Plus size={20} />
          Add Room
        </button>
      </div>

      {/* Room Form Section */}
      {isAddingRoom && (
        <form
          onSubmit={handleAddRoom}
          className="bg-white p-6 rounded-lg shadow space-y-4"
        >
          <h1 className="text-xl font-semibold mb-4">Add New Room</h1>
          <div className="grid grid-cols-2 gap-4">
            {/* Room Layout Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Room Name</label>
            <input
              type="text"
              placeholder="Room Name"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              className="border p-2 rounded"
              required
            />
            </div>
           
            {/* Desk Capacity */}
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Desk Capacity</label>
            <input
              type="number"
              placeholder="Desk Capacity"
              value={deskCapacity}
              onChange={(e) => setDeskCapacity(+e.target.value)}
              min={1}
              className="border p-2 rounded"
            />
            </div>

            {/* Rows box */}

            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Rows</label>
            <input
              type="number"
              placeholder="Rows"
              value={rowCount}
              onChange={(e) => setRowCount(+e.target.value)}
              min={1}
              className="border p-2 rounded"
            />
             </div>

             {/* Columns box */}

            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Columns</label>
            
            <input
              type="number"
              placeholder="Columns"
              value={colCount}
              onChange={(e) => setColCount(+e.target.value)}
              min={1}
              className="border p-2 rounded"
            />
           </div>



            
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border p-2 rounded col-span-2"
            />
          </div>

          
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsAddingRoom(false)}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              OK
            </button>
          </div>
        </form>
      )}

      {/* Room layout list */}
      <div
        ref={layoutRef}
        className="bg-white rounded-lg shadow-sm overflow-hidden"
      >
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Layout</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rooms.map((room) => (
              <tr key={room.id}>
                <td className="px-6 py-4 whitespace-nowrap">{room.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{room.totalCapacity}</td>
                <td className="px-6 py-4 whitespace-nowrap">{room.rowCount} × {room.colCount}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex gap-2">
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => alert("Edit feature coming soon!")}
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => alert("Delete feature coming soon!")}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {rooms.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                  No rooms added yet. Click the "Add Room" button to create one.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
