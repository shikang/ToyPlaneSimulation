using UnityEngine;

[System.Serializable]
public class PlaneParams 
{
    public float mass = 1;
    public float drag = 0.1f;
    public float force = 2000;
    public float angle = 45;

    public static PlaneParams CreateFromJSON(string jsonString)
    {
        return JsonUtility.FromJson<PlaneParams>(jsonString);
    }
}

