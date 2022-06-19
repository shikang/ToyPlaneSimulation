using TMPro;
using UnityEngine;

public class PlaneStatsUIUpdater : MonoBehaviour
{
    public TMP_Text mDistanceText;
    public TMP_Text mHeightText;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (mDistanceText != null)
        {
            mDistanceText.SetText("Distance: " + ((int)transform.position.z).ToString());
        }

        if (mHeightText != null)
        {
            mHeightText.SetText("Height: " + ((int)transform.position.y - 1).ToString());
        }
    }
}
